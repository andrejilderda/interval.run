const metrics = {
    state: () => ({
        metricSystem: 'km',
    }),
    mutations: {
        toggleMetricSystem(state) {
            state.metricSystem = this.state.metricSystem === 'km' ? 'mi' : 'km';
        },
        setMetricSystem(state, metric) {
            state.metricSystem = metric;
        },
    },
    // actions: { },
    getters: {
        metricSystem: () => this.state.metricSystem,
    },
};

export default metrics;
