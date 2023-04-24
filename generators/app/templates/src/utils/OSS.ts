/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import AliOSS from 'ali-oss'
import { v4 as uuidv4 } from 'uuid'
import { getOssToken } from '@/api/sts'

export async function uploadFileFromOss(file: File) {
  console.log('file: ', file)
  const tokenInfo = await getOssToken()
  if (!tokenInfo) {
    return Promise.reject(new Error('tokenInfo 错误'))
  }

  const params = {
    region: 'oss-' + tokenInfo.region,
    accessKeyId: tokenInfo.access_key_id,
    accessKeySecret: tokenInfo.access_key_secret,
    stsToken: tokenInfo.security_token,
    bucket: tokenInfo.bucket,
    secure: true,
    timeout: 3 * 60 * 1000 // 毫秒数
  }

  const client = new AliOSS(params)

  const objectKey = `dataguide/${uuidv4()}/${uuidv4()}/${file.name}`
  // 普通上传
  async function putObject() {
    try {
      const result = await client.put(objectKey, file)

      console.log('result: ', result)
    } catch (e) {
      console.log(e)
    }
  }

  putObject()
}
