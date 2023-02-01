import ComplexGrid from './ComplexGrid';
import products from "../data/products.json";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

const productList = () =>{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ComplexGrid product={product}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default productList;
