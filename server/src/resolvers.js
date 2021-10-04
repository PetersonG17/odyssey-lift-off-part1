const resolvers = {
    Query: {
        // returns an array of Tracks
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        // Get a single track by id from the track page
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        }
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({ id }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id);
        }
    }
}

module.exports = resolvers;