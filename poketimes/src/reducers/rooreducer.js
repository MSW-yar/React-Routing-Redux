const initState = {
  posts: [
    {id:'1', title:'sdiahodsd', body:'fhduhfuhiofhdoihdihoihqdhoqihalkfihwifijf '},
    {id:'2', title:'sdiwqidhhsndkd', body:'fhduhfuhiofhdoihdihoihqdhoqihjfhahouhioidw'},
    {id:'3', title:'sdiahodsddhhdd44545454', body:'fhduhfuhiofhdoihdihoihqdhoqihdfhwhdhhwhfwh'},
    {id:'4', title:'sdiahodsdqdkjdijqdpjqpdjpd', body:'fhduhfuhiofhdoihdihoihqdhoqihehefehofofhih'},

  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  return state;
};

export default rootReducer;
