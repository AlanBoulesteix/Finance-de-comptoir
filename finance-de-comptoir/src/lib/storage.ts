import { supabase } from './supabase'

export class StorageService {
  static async uploadImage(
    file: File,
    bucket: string = 'images',
    folder: string = ''
  ): Promise<string | null> {
    const fileExt = file.name.split('.').pop()
    const fileName = `${folder}${Math.random().toString(36).substring(2)}.${fileExt}`

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file)

    if (error) {
      console.error('Error uploading file:', error)
      return null
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path)

    return publicUrl
  }

  static async deleteImage(
    path: string,
    bucket: string = 'images'
  ): Promise<boolean> {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path])

    if (error) {
      console.error('Error deleting file:', error)
      return false
    }

    return true
  }

  static getPublicUrl(path: string, bucket: string = 'images'): string {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(path)

    return data.publicUrl
  }
}