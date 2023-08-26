import SoftwareEnggImg from "../../assets/categories/software-engineering.png";
import EnglishSpeakingImg from "../../assets/categories/english-speaking.png";
import FreelancingImg from "../../assets/categories/freelancing.png";
import CounselingImg from "../../assets/categories/counseling.png";
import CareerGuidanceImg from "../../assets/categories/career-guidance.png";
import HobbyImg from "../../assets/categories/hobby.png";
import TravelingImg from "../../assets/categories/traveling.png";
import MiscellaneousImg from "../../assets/categories/miscellaneous.png";

export const categories = [
  {
    categoryid: "cat1",
    category: "Software Engineering",
    image: SoftwareEnggImg,
  },
  { categoryid: "cat2", category: "Career Guidance", image: CareerGuidanceImg },
  { categoryid: "cat3", category: "Freelancing", image: FreelancingImg },
  {
    categoryid: "cat4",
    category: "English Speaking",
    image: EnglishSpeakingImg,
  },
  { categoryid: "cat5", category: "Hobby", image: HobbyImg },
  { categoryid: "cat6", category: "Traveling", image: TravelingImg },
  { categoryid: "cat7", category: "Counseling", image: CounselingImg },
  { categoryid: "cat8", category: "Miscellaneous", image: MiscellaneousImg },
];

export const getCategoryById = (categoryId) => {
  if (!categoryId) {
    return null;
  }
  return categories.find((category) => category.categoryid === categoryId);
};
