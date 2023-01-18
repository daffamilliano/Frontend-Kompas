<template>
<h1>Diari Jajan Februari 2021</h1>
<h4>Pengeluaran Bulan Ini</h4>
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Tambah Item</button>
<div class="container">
<div class="row">
<div class="card col-sm" style="width: 100rem; margin: 8px;" v-for="details of detail" :key="details.id">
    <div class="card-body">
    <h5 class="card-title">{{ details.tanggal }}</h5>
    <div><p class="card-text">{{ details.jam }}</p><p class="card-text">{{ details.nama }}</p><p class="card-text">{{ details.pengeluaraan }}</p></div>
  </div>
</div>
</div>
</div>

<div class="modal" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Tambah Entri</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>Nama</div>
        <input type="text" v-model="itemnama">
        <div>Harga</div>
        <input type="number" v-model="itempengeluaraan">
        <input hidden type="date" v-model="itemtanggal">
        <input hidden type="time" v-model="itemjam">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" @click="addItem()" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name : "Item",
    data() {
        return {
            detail : [],
            itemjam : "",
            itemtanggal : "",
            itemnama : "",
            itempengeluaraan : "",
        };
    },
    async created() {
      try {
      const res = await axios.get(`http://localhost:3000/detail`);
      this.detail = res.data;
    } catch (error) {
      console.log(error);
    }
    },
     methods: {
    async addItem() {
      const res = await axios.post(`http://localhost:3000/detail`, {
        nama: this.itemnama,
        pengeluaraan: this.itempengeluaraan,
      });
      this.detail = [...this.detail, res.data];
      date = new Date();
      jam = date.getHours();
      tanggal = date.getDate();
      this.itemtanggal = tanggal;
      this.itemjam = jam;
      this.itemnama = "";
      this.itempengeluaraan = "";
    },
  },
}
</script>
