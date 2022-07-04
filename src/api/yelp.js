import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer DDwwBUn00P0oh22HBBvvAmKgPJYw9Hxn8bPaxm60pf_-MMmK8HeFs2WJFxJG9wRMXbQ3sLi5Yxu_uhU6Ld6aTglkQeadKB8983NyzpRBgPOFu4xe0YYW53GYZ8W-YnYx',
  },
});
