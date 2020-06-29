const newLink = {
    subscribe: newLinkSubscribe,
    resolve: payload => {
        return payload
    }
}

function newLinkSubscribe(parent, args, context, info){
    return context.prisma.$subscribe.link({mutaion_in: ['CREATED']}).node()
}

function newVoteSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.vote({ mutation_in: ['CREATED']}).node()
}

const newVote = {
    subscribe: newVoteSubscribe,
    resolve: payload => {
        return payload
    }

}

module.exports = {
    newLink,
    newVote
}