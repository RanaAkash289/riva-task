export function recipientFilter(recipient, searchTxt){
  const normalSearch = searchTxt.trim().toLowerCase()
  if(!normalSearch){
    return recipient
  }
  return recipient.filter((res)=>{
    const name = res.name.toLowerCase()
    const email = res.email.toLowerCase()

    return (name.includes(normalSearch) || email.includes(normalSearch))
  })
}
