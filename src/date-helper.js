export const months = ['Jan','Feb','Mar','Apr','May,','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export const getMonthNameNum = (timestamp) => {
   return new Date(timestamp).getMonth() 
}

export const  getAverageWeightPerMonth = (data) => {
    let arr = [{count: 0,total:0},{count: 0,total:0},{count: 0,total:0},{count: 0,total:0},{count: 0,total:0},{count: 0,total:0},{count: 0,total:0},{count: 0,total:0},{count: 0,total:0},{count: 0,total:0},{count: 0,total:0},{count: 0,total:0}]
        
        for(let i=0;i<data.length;i++){
        arr[getMonthNameNum(+data[i].date)]  = {
        count: arr[getMonthNameNum(+data[i].date)].count + 1,
        total:  arr[getMonthNameNum(+data[i].date)].total + data[i].weight
        }
      }
      return arr.map(c=> c.total === 0 ? 0:  (c.total/c.count).toFixed(2))
    }