import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Deciphering the Interregional and Interhemisphere Proteome of the Human Brain in the Context of the Human Proteome Project',
    description: 'Journal of Proteome Research 2021 20 (12), 5280-5293',
    demoLink: 'https://10.1021/acs.jproteome.1c00511',
    tags: ['Neuroscience', 'Bioinformatics Tools', 'Omics']
  },
  {
    name: 'Organ-Based Proteome and Post-Translational Modification Profiling of a Widely Cultivated Tropical Water Fish, Labeo rohita',
    description: "Journal of Proteome Research 2022 21 (2), 420-437",
    demoLink: 'https://10.1021/acs.jproteome.1c00759',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Bioinformatics Tools', 'Omics']
  },
  {
    name: 'Deep Phosphoproteome Landscape of Interhemispheric Functionality of Neuroanatomical Regions of the Human Brain',
    description: 'Journal of Proteome Research 2023 22 (4), 1043-1055',
    demoLink: 'https://10.1021/acs.jproteome.2c00244',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Neuroscience', 'Bioinformatics Tools', 'Omics']
  },
]
