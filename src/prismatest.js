const { prisma } = require ('./generated/prisma-client')

async function main(){
    console.log('Starting...')
    const newLink = await prisma.createLink({
        url: 'www.prisma.io',
        description: 'Prisma replaces traditional ORMs'
    })
    console.log(`Created new link: ${newLink.url} (ID: ${newLink.id})`)

    const updatedLink = await prisma.updateLink(
        {where: { id: "ckbjg9a96ts3l0968dzr0bzuz"},
            data: {url: "www.test.de",
        description:"My new description"
        },
    })
    console.log(`updated link: ${updatedLink.description}, ${updatedLink.url}`)
    //const allLinks = await prisma.links();
    //console.log(allLinks)
}

main().catch(e => console.error(e))