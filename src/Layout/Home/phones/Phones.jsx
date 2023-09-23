import Phone from "./Phone";
import PropsType from 'prop-types'


const Phones = ({Phones}) => {
      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
                  {
                        Phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                  }
            </div>
      );
};


Phones.propTypes = {
      Phones:PropsType.object.isRequired
}

export default Phones;