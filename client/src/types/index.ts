export interface Id {
  _id: string;
}

export interface IAbout extends Id {
  title: string;
  description: string;
  imgUrl: string;
}

export interface IEducation extends Id {
  title: string;
  year: string;
  description: string;
  imgUrl: string;
}

export interface IProject extends Id {
  title: string;
  description: string;
  codeLink: string;
  projectLink: string;
  tags: string[];
  imgUrl: string;
  name: string;
}

export interface ISkill extends Id {
  name: string;
  bgColor: string;
  icon: string;
}

export interface IExperience extends Id {
  year: number;
  works: IWork[];
}

export interface IWork {
  name: string;
  company: string;
  desc: string;
  _key: string;
}

export interface ITestimonial extends Id {
  name: string;
  company: string;
  imgurl: string;
  feedback: string;
}

export interface IBrand extends Id {
  name: string;
  imgUrl: string;
}
