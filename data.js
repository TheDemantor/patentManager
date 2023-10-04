
const patents = [
  {
    id: "1",
    title: 'Method for Data Encryption',
    citations: [{
      id: "1",
      impact: 4,
      use: "Enhanced data analysis in my research.",
    },],
    authors: ["Vaibhav"]
  },
  {
    id: "2",
    title: 'System for Autonomous Vehicles',
    authors: ["Vaibhav"]
  },
  {
    id: "3",
    title: 'AI-Based Healthcare Diagnosis',
    authors: ["Vaibhav"]
  },
  {
    id: "4",
    title: 'Blockchain Technology for Supply Chain',
    authors: ["Vaibhav"]
  },
  {
    id: "5",
    title: 'Solar Energy Generation System',
    authors: ["Vaibhav"]
  }
];

const authors = [
  {
    id: '1',
    name: 'Jane Smith',
    institute: 'Institute A',
    certified: true
  },
  {
    id: '2',
    name: 'Emily Brown',
    institute: 'Institute B',
    certified: false
  },
  {
    id: '3',
    name: 'David Lee',
    institute: 'Institute A',
    certified: false
  },
  {
    id: '4',
    name: 'Sarah Green',
    institute: 'Institute B',
    certified: true
  }
]

const citations = [
  {
    id: '1',
    impact: 4,
    use: 'Enhanced data analysis in my research.',
    authorId: '1',
    patentId: '1'
  },
  {
    id: '2',
    impact: 5,
    use: 'Revolutionized my research methodology.',
    authorId: '2',
    patentId: '2'
  },
  {
    id: '3',
    impact: 3,
    use: 'Part of my experimental setup with room for optimization.',
    authorId: '3',
    patentId: '3'
  },
  {
    id: '4',
    impact: 4,
    use: 'Significant improvement in research outcomes.',
    authorId: '4',
    patentId: '4'
  },
  {
    id: '5',
    impact: 2,
    use: "Didn't meet research requirements.",
    authorId: '1',
    patentId: '5'
  },
  {
    id: '6',
    impact: 5,
    use: 'Transformed my research approach.',
    authorId: '2',
    patentId: '1'
  },
  {
    id: '7',
    impact: 3,
    use: 'Used occasionally as a supplementary research tool.',
    authorId: '3',
    patentId: '2'
  },
  {
    id: '8',
    impact: 4,
    use: 'Dependable asset in daily research routines.',
    authorId: '4',
    patentId: '3'
  },
  {
    id: '9',
    impact: 2,
    use: "Didn't meet research expectations.",
    authorId: '1',
    patentId: '4'
  },
  {
    id: '10',
    impact: 5,
    use: 'Vital research tool for professionals.',
    authorId: '2',
    patentId: '5'
  }
];



export default { patents, citations, authors }


