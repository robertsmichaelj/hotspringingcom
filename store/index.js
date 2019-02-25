const axios = require('axios');

export const state = () => ({
    sitewide: {},
    springs: {},
    pagetype: {},
    popular: {},
    rating: {},
    within2Hours: {},
    articles: {},
    articlesTips: {},
    tripReports: {}
})

export const mutations = {
    setSitewide(state, data) {
        state.sitewide = data;
    },
    setSprings(state, data) {
        for (var spring in data.data) {
            state.springs[data.data[spring].condensed_page_name] = data.data[spring];
        }
    },
    setPageType(state, data) {
        for (var page in data.data) {
            state.pagetype[data.data[page].page_type] = data.data[page];
        }
    },
    setPopular(state, data) {
        for (var popular in data.data) {
            state.popular[data.data[popular].condensed_page_name] = data.data[popular];
        }
    },
    setRating(state, data) {
        for (var rate in data.data) {
            state.rating[data.data[rate].condensed_page_name] = data.data[rate];
        }
    },
    setWithin2Hours(state, data) {
        for (var within2 in data.data) {
            state.within2Hours[data.data[within2].condensed_page_name] = data.data[within2];
        }
    },
    setArticles(state, data) {
        for (var article in data) {
            state.articles[data[article].condensed_title] = data[article];
        }
//        state.articles = data;
    },
    setArticlesTips(state, data) {
        for (var articlesTip in data) {
            state.articlesTips[data[articlesTip].condensed_title] = data[articlesTip];
        }
//        state.articlesTips = data;
    },
    setArticlesTripReports(state, data) {
        for (var tripReport in data) {
            state.tripReports[data[tripReport].condensed_title] = data[tripReport];
        }
//        state.tripReports = data;
    }
}

export const getters = {
    sitewide: state => state.sitewide,
    springs: state => state.springs,
    pagetype: state => state.pagetype,
    popular: state => state.popular,
    rating: state => state.rating,
    within2Hours: state => state.within2Hours,
    articles: state => state.articles,
    articlesTips: state => state.articlesTips,
    tripReports: state => state.tripReports
}

export const actions = {
    async nuxtServerInit ({commit}) {
        const sitewide = await axios.get("https://www.hotspringing.com/directus/public/_/items/sitewide?fields=*.*").then((response) => {
            commit("setSitewide", response.data.data[0]);
        });
        const springs = await axios.get("https://www.hotspringing.com/directus/public/_/items/hotsprings?fields=*.*.*&sort=name").then((response) => {
            commit("setSprings", response.data);
        });
        const pageTypes = await axios.get("https://www.hotspringing.com/directus/public/_/items/pages?fields=*.*").then((response) => {
            commit("setPageType", response.data);
        });
        const popu = await axios.get("https://www.hotspringing.com/directus/public/_/items/hotsprings?filter[popularity][gt]80&sort=-popularity&fields=*.*.*&limit=6").then((response) => {
            commit("setPopular", response.data);
        });
        const rate = await axios.get("https://www.hotspringing.com/directus/public/_/items/hotsprings?filter[rating][gt]80&sort=-rating&fields=*.*.*&limit=6").then((response) => {
            commit("setRating", response.data);
        });
        const within2hours = await axios.get("https://www.hotspringing.com/directus/public/_/items/hotsprings?filter[num_of_minutes_from_boise][lt]=121&fields=*.*.*&limit=6").then((response) => {
            commit("setWithin2Hours", response.data);
        });
        const art = await axios.get("https://www.hotspringing.com/directus/public/_/items/articles?fields=*.*.*").then((response) => {
            commit("setArticles", response.data.data);
        });
        const artTips = await axios.get("https://www.hotspringing.com/directus/public/_/items/articles?filter[article_type]=tips&fields=*.*.*").then((response) => {
            commit("setArticlesTips", response.data.data);
        });
        const artTripReports = await axios.get("https://www.hotspringing.com/directus/public/_/items/articles?filter[article_type]=trip&fields=*.*.*").then((response) => {
            commit("setArticlesTripReports", response.data.data);
        });
    }
}