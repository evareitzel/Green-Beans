class CryptoSerializer < ActiveModel::Serializer
  attributes :id, :name, :symbol, :price, :walletcryptos
end
