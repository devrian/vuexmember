export default {
    members: state => {
        return state.members.sort((a, b) => {
            return a['point'] < b['point']
        })
    },
    singleView: state => {
        return state.singleView
    },
    active_member: state => {
        return state.active_member
    }
}