import { ResearchProject } from '@/types';
import placeholderImage from '../public/assets/images/stitch.jpg';

export const researchProjects: ResearchProject[] = [
  {
    id: "image2radiomics",
    title: "Image2Radiomics",
    description: "A framework for radiology data and radiomics extraction.",
    details: "Image2Radiomics is an advanced framework designed to extract valuable radiomics features from medical images. This tool enables researchers and clinicians to analyze complex imaging data, potentially leading to more accurate diagnoses and personalized treatment plans for pancreatic cancer patients. Our framework incorporates state-of-the-art machine learning algorithms to process and analyze medical images, extracting quantitative features that may not be visible to the human eye.",
    images: [
        placeholderImage,
      "/assets/images/image2radiomics-features.jpg",
      "/assets/images/image2radiomics-results.jpg"
    ]
  },
  {
    id: "pdac-early-detection",
    title: "PDAC Early Detection",
    description: "Developing AI approaches in early detection of PDAC.",
    details: "Our PDAC Early Detection project focuses on leveraging artificial intelligence to identify early signs of Pancreatic Ductal Adenocarcinoma (PDAC). By analyzing various imaging modalities and patient data, we aim to develop robust algorithms that can detect PDAC at its earliest stages, significantly improving patient outcomes.",
    images: [
        placeholderImage,
      "/assets/images/pdac-detection-algorithm.jpg",
      "/assets/images/pdac-detection-results.jpg"
    ]
  },
  {
    id: "ipmn-risk-stratification",
    title: "IPMN Risk Stratification",
    description: "AI tools in stratifying IPMN risk to determining treatment.",
    details: "The IPMN Risk Stratification project utilizes advanced AI techniques to assess the risk associated with Intraductal Papillary Mucinous Neoplasms (IPMNs). By analyzing imaging features and other clinical data, our tools help clinicians make informed decisions about the most appropriate treatment strategies for patients with IPMNs.",
    images: [
      placeholderImage,
      "/assets/images/ipmn-stratification-analysis.jpg",
      "/assets/images/ipmn-stratification-outcomes.jpg"
    ]
  },
  {
    id: "felix-reader-study",
    title: "Felix Reader Study",
    description: "Radiology viewer tool to conduct reliability study.",
    details: "The Felix Reader Study is a comprehensive radiology viewer tool designed to conduct reliability studies in pancreatic imaging. This platform allows radiologists to review and annotate images in a standardized manner, facilitating research on inter-observer variability and the effectiveness of various imaging protocols in pancreatic cancer detection.",
    images: [
      placeholderImage,
      "/assets/images/felix-reader-annotation.jpg",
      "/assets/images/felix-reader-analysis.jpg"
    ]
  }
];

