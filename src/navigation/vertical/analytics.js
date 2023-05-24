import axiosIns from "@/plugins/axios"

// let links = []
let links = []
async function getLinks(){
  axiosIns.get('getLinks').then(res=>{

    // for (let i = 0; i < res.data.links.length; i++) {
    //   links.push({
    //     title :  res.data.links[i].title,
    //     to :  res.data.links[i].to,
    //     icon :  { icon : res.data.links[i].icon.icon },
    //   })
    // }
    
    // console.log(links)
    
    return res.data.links
  }).catch(err=>{
    console.log(err)
  })
  
  // return links
} 

let all_links = []

// getLinks()
// export default   links
export default  await getLinks()

// [
//   links,
//   {
//     title: 'Inscriptions',
//     icon: { icon: 'tabler-user' },
//     to: 'analytics-inscriptions',
//   },
//   {
//     title: 'Prospets',
//     icon: { icon: 'tabler-users' },
//     to: 'analytics-prospects',
//   },
//   {
//     title: 'Communication',
//     icon: { icon: 'tabler-file' },
//     to: 'analytics-comunication',
//   },

//   // {
//   //   title: 'Crm',
//   //   icon: { icon: 'tabler-smart-home' },
//   //   to: 'analytics-crm',
//   // },
// ]
