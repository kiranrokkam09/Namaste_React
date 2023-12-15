const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.item.id}
          className="text-left p-2 m-2 border-b-2 border-b-gray-200 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.item?.name}</span>
              <span> - ₹ {item?.item?.price}</span>
            </div>
            <p className="text-xs">{item.item.desc}</p>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button className="p-2 mx-16 bg-black text-white rounded-lg shadow-lg">
                Add +
              </button>
            </div>
            <img src={item.item.item_image_url} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
