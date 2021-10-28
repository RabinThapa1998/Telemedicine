const initState ={
    data: [
        { Name: 'Rabin Thapa', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 1 },
        { Name: 'Bivek Thapa', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 2 },
        { Name: 'Anil kumar Thakur', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 3 }],
        // { Name: 'Spiderman Singh', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 4 },
        // { Name: 'King Kong', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 5 },
        // { Name: 'Rock Thapa', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 6 },
        // { Name: 'Rock Thapa', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 7 }],
    timeline_root:[
        {id:1, col1: 1, col2:" ", col3:" ", col4:" ", col5:" ", col6:" ",col7:" ",col8:" ", col9:7 },
        {id:2, col1: " ", col2:2, col3:" ", col4:" ",col5:2, col6:" ",col7:" ",col8:2, col9:" " },
        {id:3, col1: " ", col2:" ", col3:" ", col4:" ",col5:" ", col6:" ",col7:5,col8:" ", col9:" " },
        {id:4, col1: " ", col2:" ", col3: 4, col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
        {id:5, col1: " ", col2:1 , col3:" ", col4:2,col5:" ", col6:" ",col7:" ",col8:4, col9:" " },
        {id:6, col1: 3, col2:" ", col3:" ", col4:" ",col5:" ", col6:" ",col7:3 ,col8:" ", col9:" " },
        {id:8, col1: " ", col2:" ", col3:7 , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
        // {id:9, col1: " ", col2:" ", col3:1 , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
        // {id:10, col1: 8, col2:" ", col3:" " , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
        // {id:11, col1: " ", col2:" ", col3:" " , col4:" ",col5:" ", col6:" ",col7:1,col8:" ", col9:" " },
        // {id:12, col1: " ", col2:" ", col3:" " , col4:5,col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
        // {id:13, col1: " ", col2:" ", col3:" " , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
        // {id:15, col1: 4, col2:" ", col3:3 , col4:" ",col5:" ", col6:" ",col7:4, col8:" ", col9:5 },
        // {id:16, col1: " ", col2:1 , col3:" " , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
        // {id:17, col1: " ", col2:" ", col3:3 , col4:2 ,col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
        // {id:18, col1: 8 , col2:" ", col3:" " , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " }
    ],
    oncall:[1,5,8,2,3,4]
}

const dashboardReducer = (state=initState, action)=>{
    return state;
}

export default dashboardReducer;