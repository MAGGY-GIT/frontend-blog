

function Contacts() {
  return (
    <div className="mt-10 p-6">

      <div className="max-w-md w-full mx-auto p-8 bg-slate-500 rounded-lg" >
        <h3 className="text-[27px] text-center font-bold mb-4 text-pink-300">Contacts Us</h3>

        <form>
          <div className="mb-4">
            <input placeholder="First name" type="text" name='firstname' 
            className="w-full px-3 py-3 border rounded-lg bg-slate-50" required />
          </div>

          <div className="mb-4">
            <input placeholder="Second name" type="text" name='lastname'
            className="w-full px-3 py-3 border rounded-lg bg-slate-50" required />
          </div>

          <div className="mb-4">
            <input placeholder="Email address" type="text" name='emailaddress'
            className="w-full px-3 py-3 border rounded-lg bg-slate-50" required />
          </div>

          <div className="mb-4">
            <textarea name="message" id="" placeholder="Message"
            className="w-full px-3 py-3 border rounded-lg bg-slate-50" required></textarea>
          </div>

          <button type="submit">
            Send Message
          </button>
            
          </form>
      </div>

    </div>
  )
}

export default Contacts