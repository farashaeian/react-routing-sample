let books = [
    {
        name: "سلامت",
        number: 1,
        amount: "700",
        due: "1400/01/25"
    },
    {
        name: "جودی ابوت",
        number: 2,
        amount: "40000",
        due: "1408/01/25"
    },
    {
        name: "اشپزی",
        number: 3,
        amount: "99000",
        due: "1400/06/25"
    },
    {
        name: "تاریخ جهان",
        number: 4,
        amount: "7000",
        due: "1400/01/25"
    },
    {
        name: "کودک",
        number: 5,
        amount: "20000",
        due: "1400/01/23"
    },
];

export function getBooks(){ 
    return books;
}

export const getBook = (number) => {
    return books.find((book) => book.number === number);
}
