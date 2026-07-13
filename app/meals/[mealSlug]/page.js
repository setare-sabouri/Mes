export default function MealDetails({ params }) {
    return (
        <main>
            <h1>
                <p>{params.mealSlug} is yummy</p>
            </h1>
        </main>
    )
}