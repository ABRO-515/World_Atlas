

export const Contact = () => {

  const handleSubmitForm = (formData) => {
    // Use can send this data to the backend
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);


  }



  return (
    <>
      <main className="w-full h-full" >
        <div className="lg:h-[60vh] lg:my-5 items-center justify-center  flex flex-col gap-10 my-18 mx-auto w-fit" >
          <h1 className="text-center text-2xl font-semibold" >Contact Us</h1>



          <form className="flex flex-col gap-8" action={handleSubmitForm}>
            <input
              placeholder="Enter Your Name"
              className="border rounded-md pl-5 pr-16 text-left py-2 bg-transparent"
              required
              autoComplete="on"
              type="text"
              name="username" />

            <input
              placeholder="Enter Your Email"
              className="border rounded-md pl-5 pr-16 py-2"
              required
              autoComplete="on"
              type="email"
              name="email" />
            <textarea
              className="border rounded-md pl-5 lg:pr-[5.4rem] pr-[6.4rem]  pt-2 pb-8"
              placeholder="Enter Your Message"
              name="message"

            ></textarea>


            <button value="send" type="submit" className="bg-[#202020] rounded-md py-2 hover:bg-[#161616] cursor-pointer" >Send</button>
          </form>
        </div>
      </main>
    </>
  )
}
