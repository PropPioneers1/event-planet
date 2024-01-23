
import Container from "../../../../components/ui/Container";
import { categories } from "./categoryData";
import CategoryCard from "./CategoryCard/CategoryCard";

const Categories = () => {
    
    return (
        <div className="my-10">
            <Container>
                <h2 className="text-3xl font-semibold text-center my-10">Popular Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories?.map((category, idx) => <CategoryCard
                     key={idx}
                     label={category.label}
                     icon={category.icon}
                     >

                    </CategoryCard>)}
                </div>
            </Container>
        </div>
    );
};

export default Categories;