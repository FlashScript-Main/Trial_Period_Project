
const useRandom = (randomCategory: RandomCategoryType[]) => {
    const newArray = randomCategory?.sort(() => Math.random() - 0.5);
    return newArray;
}

export default useRandom