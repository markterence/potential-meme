
<template>
  <div class="container">
    <h1>{{ message }}</h1>

    <div>
      {{ tenant }}
    </div>

    <div v-if="workspace">
      <h3>{{ workspace.workspace.name }}</h3>
      <code>{{ workspace.workspaceToken }}</code>

      <ul>
        <li>
          Use the generated 18 bytes crypto thing => <code>{{workspace.workspaceToken}}</code>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSubdomain } from 'src/utils/tenant.js'
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      message: 'Using Parcel In A Vue.js App',
      tenant: '',
      actions: [],
      workspace: {},
    };
  },

  mounted() {
    this.tenant = getSubdomain();
    this.getTenantInfo();

  },
  
  methods: {
    getTenantInfo() {
      axios.get('http://localhost:3000/tenant', {
        headers: {
          'x-tenant-domain': this.tenant 
        }
      }).then((result)=>{
        if(result.data) {
          const {data} = result;
          this.workspace = data;
        }
      })
    }
  }
};
</script>

<style scoped>
  .container {
    width: 600px;
    margin: 50px auto;
    text-align: center;
  }
</style>