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

    Mutation: {
        // Increment a tracks number of views
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id);

                // Add on the code, success, and message properties
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${id}`,
                    track,
                };
            } catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null,
                }
            }
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