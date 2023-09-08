export function formatPermalink(post) {
    const { date } = post;
    const year = date.split("-")[0];
    const month = date.split("-")[1];

    return `${year}/${month}/${post.slug}`;
}

export function getBylines(post) {
    const bylines = post._embedded["wp:term"].reduce((acc, item) => {
        const result = item.find((term) => term.taxonomy === "byline");

        return result ? [...acc, result] : acc;
    }, []);

    return bylines;
}

export function formatDate(post) {
    const { date } = post;
    const publishDate = new Date(date);

    const day = publishDate.getDay();
    const month = publishDate.getMonth();
    const year = publishDate.getFullYear();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return publishDate.toLocaleString("en-US", options);

    // return `${day} ${month} ${year}`;
}
