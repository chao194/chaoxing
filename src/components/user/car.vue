<script setup lang="ts">
import { method } from 'lodash'


interface Books {
  id: number
  date: string
  name: string
  count:number
  price:number
}

const tableData: Books[] = [
  {
    id: 1,
    name: '《算法导论》',
    date: '2006-9',
    price: 85.00,
    count: 1
  },
  {
    id: 2,
    name: '《UNIX编程艺术》',
    date: '2006-2',
    price: 59.00,
    count: 1
  },
  {
    id: 3,
    name: '《编程珠玑》',
    date: '2008-10',
    price: 39.00,
    count: 1
  },
  {
    id: 4,
    name: '《代码大全》',
    date: '2006-3',
    price: 128.00,
    count: 1
  },
]

const decrement = (index: number) => {
  console.log(tableData[index].count-1)
  tableData[index].count-1
}

const increment = (index: number) => {
  console.log(tableData[index].count+1)
  tableData[index].count+1
}

</script>

<template>
      <table>
        <thead>
          <th>序号</th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="(book,index) in tableData">
            <td>{{index+1}}</td>
            <td>{{book.name}}</td>
            <td>{{book.date}}</td>
            <td>{{book.price}}</td>
            <td>
              <button @click= "decrement(index)">-</button>
              <span class="counter">{{book.count}}</span>
              <button @click="increment(index)">+</button>
            </td>
            <td>
              <button @click="">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>总价格:</h2>


      <h2>购物车为空~</h2>
</template>