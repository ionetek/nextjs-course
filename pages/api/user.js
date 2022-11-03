// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'Ivan Tekunov',
    dateOfBirth: '31 january 1991',
    location: 'Moscow',
    sex: 'male',
    profession: 'Frontend developer',
  })
}
