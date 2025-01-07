import { Member } from '@/types'

export const members: Member[] = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    role: "Principal Investigator",
    image: "/images/jane-smith.jpg",
    bio: "Dr. Smith is a leading researcher in pancreatic cancer, with over 15 years of experience...",
    education: [
      "Ph.D. in Cancer Biology, Stanford University",
      "M.D., Johns Hopkins University",
      "B.S. in Biochemistry, MIT"
    ],
    research: [
      "Early detection biomarkers",
      "Novel therapeutic approaches",
      "Cancer immunology"
    ],
    slug: "jane-smith"
  },
  // Add more members as needed
]
