import { Member } from '@/types';
import placeholderImage from '../public/assets/images/stitch.jpg';
import elliot from '../public/assets/images/elliot-fishman.avif';
import linda from '../public/assets/images/linda-chu.jpg';
import satomi from '../public/assets/images/satomi-kawamoto.jpg';
import steph from '../public/assets/images/steph-blackwood.jpg';
import ale from '../public/assets/images/ale-blanco.jpg';
import flo from '../public/assets/images/flo-tixier.jpg';
import felipe from '../public/assets/images/felipe-ramirez.jpg';
import charles from '../public/assets/images/charles-crawford.jpg';
import hajra from '../public/assets/images/hajra-arshad.jpg';
import emir from '../public/assets/images/emir-syailendra.jpg';
import yasrab from '../public/assets/images/moh-yasrab.jpg';
import scott from '../public/assets/images/scott-graves.jpg';
import taha from '../public/assets/images/taha-ahmed.png';
import ryan from '../public/assets/images/ryan-rizk.jpg';

export const members: Member[] = [
{
    name: 'Elliot K. Fishman, MD',
    role: 'Principal Investigator',
    image: elliot,
    id: 'elliot-fishman',
    bio: `Dr. Elliot K. Fishman is a Professor in the Johns Hopkins Medicine Department Radiology and Radiological Science, Department of Oncology and Department of Surgery. He serves as a member of the Johns Hopkins Kimmel Cancer Center. His clinical and research interests focus on medical imaging with specific emphasis on three-dimensional (3D) imaging and computed tomography (CT).
    Dr. Fishman received his B.S. in 1973 and M.D. in 1977 from the University of Maryland. After a residency at Sinai Hospital in Baltimore, he completed a fellowship in CT at Johns Hopkins in 1980 and joined the Johns Hopkins faculty in 1981 as an Assistant Professor. In 1986, he became Associate Professor and, in 1991, Professor of Radiology and Oncology.
    He is a leader in the development of 3D imaging and rendering, including its impacts on and uses in patient care and management. He was involved from the beginning in the development of 3D imaging through his work with Pixar, which was a spin-off from LucasFilms in San Rafael, California. Over the last 25 years, Dr. Fishman continued to help develop 3D imaging and has been a leader in the development of interactive 3D rendering. His team is consistently at the forefront of research and development of new visualization and post-processing techniques and technologies.
    Dr. Fishman's extensive body of work in CT has resulted in over 1,000 peer-reviewed publications, and he is the author or co-author of 10 textbooks. He is the recipient of three prestigious Aunt Minnie Awards, honoring his outstanding contributions as both an educator and researcher. In 2007, he was named by Medical Imaging Magazine as the Top Radiologist in the Nation. He is a member of editorial boards for more than 35 journals, an active member of several professional radiology associations and is a past-president of the Society of Body CT/MR.`,
    education: ['MD, University of Maryland'],
    research: ['Advanced imaging techniques', 'Early pancreatic cancer detection'],
    email: "efishman@jhmi.edu",
    phone: "+1 (410) 955-5173",
    linkedin: "https://www.linkedin.com/in/elliot-fishman-123456/",
    facebook: "https://www.facebook.com/elliot.fishman.123"
  },
  {
    name: 'Linda Chu, MD',
    role: 'Co-Investigator',
    image: linda,
    id: 'linda-chu',
    bio: `Dr. Linda Chi Hang Chu is an Associate Professor in the Johns Hopkins Medicine Department of Radiology and Radiological Science. Her clinical expertise includes body CT, MRI and US. 
    Her research interests include abdominal imaging, cancer imaging, radiomics, and artificial intelligence. Dr. Chu graduated from the University of Toronto in 2003 and was awarded the Governor General's Silver Medal, 
    the highest academic achievement from the undergraduate program. She earned her medical degree as a member of AOA and phi beta kappa from Johns Hopkins University in Baltimore, MD in 2007. 
    She completed her Diagnostic Radiology residency and body MRI fellowship at Johns Hopkins Hospital. Dr. Chu joined the Johns Hopkins faculty in 2013.`,
    education: ['MD, University of Toronto'],
    research: ['Pancreatic cancer imaging', 'AI in radiology'],
    email: "lchu@jhmi.edu",
    phone: "+1 (410) 955-5174",
    linkedin: "https://www.linkedin.com/in/linda-chu-789012/"
  },
  {
    name: 'Satomi Kawamoto, MD',
    role: 'Co-Investigator',
    image: satomi,
    id: 'satomi-kawamoto',
    bio: `Dr. Satomi Kawamoto is an Associate Professor in the Johns Hopkins Medicine Department of Radiology and Radiological Science. She specializes in computed tomography (CT), ultrasound, and image-guided biopsy.
    Dr. Kawamoto received her M.D. from Gunma University in Gunma, Japan, and subsequently completed two residencies, one in internal medicine at St. Luke’s International Hospital in Tokyo, and a second in diagnostic radiology at Johns Hopkins. 
    She received a postdoctoral fellowship in cross-sectional imaging at Johns Hopkins, and then joined the Johns Hopkins faculty.
    Dr. Kawamoto’s research focuses on body CT and biopsy, particularly imaging of the genitourinary and gastrointestinal systems.`,
    education: ['MD, University of Tokyo'],
    research: ['AI-assisted diagnosis', 'Radiomics'],
    email: "skawamoto@jhmi.edu",
    phone: "+1 (410) 955-5175",
    linkedin: "https://www.linkedin.com/in/satomi-kawamoto-345678/"
  },
  {
    name: 'Stephanie Blackwood',
    role: 'Sr. Administrative Coordinator',
    image: steph,
    id: 'steph-blackwood',
    bio: 'Stephanie manages the administrative aspects of the research project.',
    education: [],
    research: [],
    email: "sblackwood@jhmi.edu",
    phone: "+1 (410) 955-5176",
    linkedin: "https://www.linkedin.com/in/stephanie-blackwood-901234/"
  },
  {
    name: 'J. Scott Graves, R.T. (R) (CT)',
    role: 'Research Technologist',
    image: scott,
    id: 'scott-graves',
    bio: `J. Scott Graves is a highly experienced imaging technologist with a career spanning over two decades in radiologic and computed tomography (CT) technology. Currently a research imaging technologist at Johns Hopkins University, Scott specializes in advanced AI applications for 3D volumetric renderings.
    Scott's expertise extends to teaching, serving as Lead Instructor for Cross-Sectional Anatomy at the Johns Hopkins School of Medical Imaging since 2007. He has delivered numerous lectures at conferences and symposia, sharing his knowledge of cardiac, thoracic, and abdominal imaging.
    Beyond his professional accomplishments, Scott is passionate about astronomy and aerospace sciences, as well as horticulture and aquaculture, with a focus on epiphytic fauna. An avid outdoorsman, he enjoys activities such as hiking, cycling, snorkeling, scuba diving, fishing, and spearfishing.`,
    education: [],
    research: [],
    email: "@jhmi.edu",
    phone: "+1 (410) 955-5176",
    linkedin: "https://www.linkedin.com/in/stephanie-blackwood-901234/"
  },
  {
    name: 'Alejandra Blanco, MD',
    role: 'Research Associate',
    image: ale,
    id: 'ale-blanco',
    bio: 'Dr. Blanco contributes to data analysis and interpretation.',
    education: ['MD, University of Barcelona'],
    research: ['Statistical analysis', 'Data visualization'],
    email: "ablanco@jhmi.edu",
    phone: "+1 (410) 955-5177",
    linkedin: "https://www.linkedin.com/in/alejandro-blanco-567890/",
    alumni: false
  },
  {
    name: 'Florent Tixier, PhD',
    role: 'Sr. Radiomics and AI Engineer',
    image: flo,
    id: 'flo-tixier',
    bio: 'Florent develops and implements AI algorithms for medical image analysis.',
    education: ['PhD, INSA Lyon'],
    research: ['Deep learning', 'Radiomics'],
    email: "ftixier@jhmi.edu",
    phone: "+1 (410) 955-5178",
    linkedin: "https://www.linkedin.com/in/florent-tixier-123456/",
    alumni: false
  },
  {
    name: 'Felipe Lopez-Ramirez, MD',
    role: 'Post-doc Research Fellow',
    image: felipe,
    id: 'felipe-ramirez',
    bio: 'Dr. Lopez-Ramirez focuses on the development of novel imaging biomarkers.',
    education: ['MD, Universidad Nacional Autónoma de México'],
    research: ['Biomarker discovery', 'Image processing'],
    email: "framire@jhmi.edu",
    phone: "+1 (410) 955-5179",
    linkedin: "https://www.linkedin.com/in/felipe-ramirez-789012/",
    alumni: false
  },
  {
    name: 'Mohammed Yasrab, MD',
    role: 'Post-doc Research Fellow',
    image: yasrab,
    id: 'moh-yasrab',
    bio: `Dr. Mohammad Yasrab, a graduate of Aga Khan University in Pakistan, joined the lab in 2023 as a postdoctoral research fellow. His research responsibilities include performing pancreatic CT segmentations, database management and maintenance, as well as manuscript and exhibit preparation. 
    Aspiring to pursue a residency in diagnostic radiology, Dr. Yasrab is passionate about integrating cutting-edge imaging techniques with clinical care to enhance diagnostic precision.`,
    education: ['MD, King Abdulaziz University'],
    research: ['Clinical trials', 'Data management'],
    email: "framire@jhmi.edu",
    phone: "+1 (410) 955-5179",
    linkedin: "https://www.linkedin.com/in/felipe-ramirez-789012/",
    alumni: false
  },
  {
    name: 'Charles Crawford, BS',
    role: 'Research Assistant',
    image: charles,
    id: 'charles-crawford',
    bio: `Charles Crawford is a Research Program Assistant for the Felix 2.0 and CTisus laboratories with the Johns Hopkins School of Medicine, 
    joining the team at the tail end of the summer of 2024. 
    He received his bachelor of science degree in biology from Brown University in 2020 and plans to attend medical school. While at Brown, Charles spent his third and fourth years exploring the world of basic science research with the Roberts biomechanical lab, where he collaborated on various musculoskeletal testing projects. 
    When Charles is not working, you usually find him playing pick-up baseball or reading a good fantasy novel.`,
    education: ['BS, Brown University'],
    research: ['Data entry', 'Quality control'],
    email: "framire@jhmi.edu",
    phone: "+1 (410) 955-5179",
    linkedin: "https://www.linkedin.com/in/felipe-ramirez-789012/",
    alumni: false
  },
  {
    name: 'Hajra Arshad, MD',
    role: 'Post-doc Research Fellow',
    image: hajra,
    id: 'hajra-arshad',
    bio: 'Dr. Arshad contributes to the development of new imaging techniques.',
    education: ['MD, Aga Khan University'],
    research: ['Image analysis', 'Algorithm development'],
    email: "framire@jhmi.edu",
    phone: "+1 (410) 955-5179",
    linkedin: "https://www.linkedin.com/in/felipe-ramirez-789012/",
    alumni: false
  },
  {
    name: 'Emir Syailendra, MD, MS',
    role: 'Post-doc Research Fellow',
    image: emir,
    id: 'emir-syailendra',
    bio: 'Dr. Syailendra focuses on the application of AI in pancreatic cancer research.',
    education: ['MD, MS, University of Indonesia'],
    research: ['AI applications', 'Machine learning'],
    email: "framire@jhmi.edu",
    phone: "+1 (410) 955-5179",
    linkedin: "https://www.linkedin.com/in/felipe-ramirez-789012/",
    alumni: false
  },
  {
    name: 'Taha Ahmed, MD',
    role: 'Post-doc Research Fellow',
    image: taha,
    id: 'taha-ahmed',
    alumni: true,
    bio: 'Dr. Ahmed contributed to several key research projects during his fellowship.',
    education: ['MD, Cairo University'],
    research: ['Pancreatic cancer biomarkers', 'Immunotherapy response prediction'],
  },
  {
    name: 'Ryan Rizk, BS',
    role: 'Research Assistant',
    image: ryan,
    id: 'ryan-rizk',
    alumni: true,
    bio: `Ryan Rizk is a Research Assistant for the Felix 2.0 and CTisus laboratories with the Johns Hopkins School of Medicine. 
    He received his bachelor of science degree from University of Miami in 2020 and now attending the medical school in Miami.`,
    education: ['MD, Cairo University'],
    research: ['Pancreatic cancer biomarkers', 'Immunotherapy response prediction'],
  }
];
