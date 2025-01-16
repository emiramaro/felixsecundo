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
  },
  {
    name: 'Stephanie Blackwood',
    role: 'Sr. Administrative Coordinator',
    image: steph,
    id: 'steph-blackwood',
    bio: 'Stephanie manages the administrative aspects of the research project.',
    education: [],
    research: [],
  },
  {
    name: 'Scott Graves',
    role: 'Research Technologist',
    image: placeholderImage,
    id: 'scott-graves',
    bio: 'Scott provides technical support for the research team.',
    education: [],
    research: [],
  },
  {
    name: 'Alejandra Blanco, MD',
    role: 'Research Associate',
    image: ale,
    id: 'ale-blanco',
    bio: 'Dr. Blanco contributes to data analysis and interpretation.',
    education: ['MD, University of Barcelona'],
    research: ['Statistical analysis', 'Data visualization'],
  },
  {
    name: 'Florent Tixier, PhD',
    role: 'Sr. Radiomics and AI Engineer',
    image: flo,
    id: 'flo-tixier',
    bio: 'Florent develops and implements AI algorithms for medical image analysis.',
    education: ['PhD, INSA Lyon'],
    research: ['Deep learning', 'Radiomics'],
  },
  {
    name: 'Felipe Lopez-Ramirez, MD',
    role: 'Post-doc Research Fellow',
    image: felipe,
    id: 'felipe-ramirez',
    bio: 'Dr. Lopez-Ramirez focuses on the development of novel imaging biomarkers.',
    education: ['MD, Universidad Nacional Autónoma de México'],
    research: ['Biomarker discovery', 'Image processing'],
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
  },
  {
    name: 'Hajra Arshad, MD',
    role: 'Post-doc Research Fellow',
    image: hajra,
    id: 'hajra-arshad',
    bio: 'Dr. Arshad contributes to the development of new imaging techniques.',
    education: ['MD, Aga Khan University'],
    research: ['Image analysis', 'Algorithm development'],
  },
  {
    name: 'Emir Syailendra, MD, MS',
    role: 'Post-doc Research Fellow',
    image: emir,
    id: 'emir-syailendra',
    bio: 'Dr. Syailendra focuses on the application of AI in pancreatic cancer research.',
    education: ['MD, MS, University of Indonesia'],
    research: ['AI applications', 'Machine learning'],
  },
  {
    name: 'Taha Ahmed, MD',
    role: 'Post-doc Research Fellow',
    image: placeholderImage,
    id: 'taha-ahmed',
    alumni: true,
    bio: 'Dr. Ahmed contributed to several key research projects during his fellowship.',
    education: ['MD, Cairo University'],
    research: ['Pancreatic cancer biomarkers', 'Immunotherapy response prediction'],
  },
];
