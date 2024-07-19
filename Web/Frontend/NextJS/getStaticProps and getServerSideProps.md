### getStaticProps
- After a page is loaded, the data is fetched.
- This is the default behavior

### getServerSideProps
- When using `getServerSideProps`, the API call to fetch data (such as messages) happens on the server before the page is rendered. 
- The fetched data is then passed as props to the component.

