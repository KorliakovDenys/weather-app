export const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        setActiveTab: (tab) => {
            dispatch({type: 'SET_ACTIVE_TAB', payload: tab});
        }
    };
};