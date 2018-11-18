import * as mutations from './mutation-types'

export default {
    showMember (context, member) {
        //call mutations
        context.commit(mutations.SHOW_MEMBER, member)
    }
}