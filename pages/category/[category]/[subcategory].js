import { useRouter } from "next/router";

const SubCategory = () => {
  const router = useRouter();
  const { subcategory } = router.query;

  return <p>SubCategory: {subcategory}</p>;
};

export default SubCategory;
