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

type RandomCategoryType = {
    id: number;
    img: string;
    english: string;
    persian: string;
}

type UserState = {
    username: string;
    email: string;
    password: string;
    setUser: (user: { username: string; email: string; password: string }) => void;
}

type CreateAccountModalType = {
    isModalActive: boolean;
    setIsModalActive: (value: boolean) => void;
}

type UserData = {
    id: number,
    username: string;
    email: string;
    password: string;
    authToken: string;
}

type PostType = {
    id: number;
    titleEn: string;
    titleFa: string;
    descriptionEn: string;
    descriptionFa: string;
    contentEn: string;
    contentFa: string;
    category: string;
    icon: string;
    color: string;
}