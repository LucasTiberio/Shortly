const LinkInitialState = [];

const LinkReducer = (LinkInitial = LinkInitialState, action) => {
    switch(action.type) {
        case "LINK_ADD":
            return [...LinkInitial, action.payload]
            
        default:
            return LinkInitial;
    }
}

export default LinkReducer;