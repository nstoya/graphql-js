const { prisma } = require ('./generated/prisma-client')

async function main(){
    console.log('Starting...')
    const newLink = await prisma.createLink({
        url: 'www.prisma.io',
        description: 'Prisma replaces traditional ORMs'
    })
    console.log(`Created new link: ${newLink.url} (ID: ${newLink.id})`)

    const allLinks = await prisma.links();
    console.log(allLinks)
}

main().catch(e => console.error(e))