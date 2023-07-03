// export const uploadImageFiles = async ({ folderName,files }) => {
//   const objectName = `${folderName}/${Date.now()}.png`;
//   const upload = await new AWS.S3({
//     credentials: {
//       accessKeyId: process.env.S3_ACCESS_KEY,
//       secretAccessKey: process.env.S3_SECRET_KEY,
//     },
//   })
//     .upload({
//       Bucket: process.env.S3_BUCKET_NAME,
//       Key: objectName,
//       ACL: 'public-read',
//       Body: file.buffer,
//       ContentDisposition: `attachment; filename="${email}.pdf"`, // 프론트에서 다운로드 시 파일명을 수정할 수 있게 함
//     })
//     .promise();

//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   return upload.Location;
// };
