export default function Home() {
  return (
    <div
      style={{
        height: '100vh',
        paddingTop: '150px',
        background: 'rgb(2,0,36)',
        // eslint-disable-next-line no-dupe-keys
        background:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,54,121,1) 52%, rgba(0,14,255,0.9584717607973422) 100%)',
      }}
    >
      <h1
        style={{
          color: '#fff',
          textAlign: 'center',
          fontWeight: '800',
          fontSize: '40px',
        }}
      >
        Phonebook
      </h1>
    </div>
  );
}
