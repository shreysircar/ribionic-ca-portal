import { ListObjectsV2Command } from "@aws-sdk/client-s3"
import { r2 } from "@/lib/r2"

export async function GET() {
  const command = new ListObjectsV2Command({
    Bucket: process.env.R2_BUCKET,
    Prefix: "invoices/2025-26/"
  })

  const data = await r2.send(command)

  const invoices = data.Contents?.map(file => ({
    name: file.Key?.split("/").pop()
  }))

  return Response.json(invoices)
}