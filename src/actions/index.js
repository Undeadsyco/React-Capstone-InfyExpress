import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const actions = {
  register: async (body) => {
    const req = await axios.post(`${baseUrl}/users`, body);
    const res = await req.data;
    return res;
  },
  login: async (email) => {
    const req = await axios.get(`${baseUrl}/users?email=${email}`);
    const res = await req.data;
    return res;
  },
  getServices: async () => {
    const req = await axios.get(`${baseUrl}/services`);
    const res = await req.data;
    return res;
  },
  getService: async (id) => {
    const req = await axios.get(`${baseUrl}/services/${id}`);
    const res = await req.data;
    return res;
  },
  makeQuery: async (body) => {
    const req = await axios.post(`${baseUrl}/queries`, body);
    const res = await req.data;
    return res;
  },
  getBookings: async (userName) => {
    const req = await axios.get(`${baseUrl}/bookings`);
    let res = await req.data;
    res = res.filter(item => item.sender.name === userName)
    return res;
  },
  makeBooking: async (body) => {
    const req = await axios.post(`${baseUrl}/bookings`, body);
    const res = await req.data;
    return res;
  },
  cancelBooking: async (id, name) => {
    await axios.delete(`${baseUrl}/bookings/${id}`)
    const req = await axios.get(`${baseUrl}/bookings`);
    let res = await req.data;
    res = res.filter(item => item.sender.name === name);
    console.log(res);
    return res;;
  }
};

export default actions;
