// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'path'

function buildReviewFilePath() {
  return path.join(process.cwd(), 'data', 'review-data.json')
}

function exractReviews(filePath) {
  const fileData = fs.readFileSync(filePath)
  return JSON.parse(fileData)
}

export default function handler(req, res) {
  console.log('API requested')

  if (req.method === 'POST') {
    const text = req.body.text

    const newReview = {
      id: new Date().toISOString(),
      user: 'Ivan Tekunov',
      text,
    }
    //Store on file or DB

    const filePath = buildReviewFilePath()
    const data = exractReviews(filePath)

    data.unshift(newReview)

    fs.writeFileSync(filePath, JSON.stringify(data))

    res.status(201).json({ message: 'Success!', review: newReview })
  } else {
    const filePath = buildReviewFilePath()
    const data = exractReviews(filePath)
    res.status(200).json({ data })
  }
}
