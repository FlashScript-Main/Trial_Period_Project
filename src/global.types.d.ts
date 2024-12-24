type CategoryType = {
    id: number;
    imgSrc: string;
    imgAlt: string;
    titleEn: string;
    titleFa: string;
    descEn: string;
    descFa: string;
    url: string;
}

type CategoryPageProps = {
    params: {
        name: string;
    }
}

type CategoryDetailProps = {
    category: CategoryType;
}