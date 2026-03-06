import { GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { r2 } from "@/lib/r2"

export async function GET(
  req: Request,
  context: { params: Promise<{ fy: string, id: string }> }
) {

  const { fy, id } = await context.params

  const key = `invoices/${fy}/${id}`

  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET,
    Key: key
  })

  const url = await getSignedUrl(r2, command, { expiresIn: 60 })

  return Response.json({ url })
}