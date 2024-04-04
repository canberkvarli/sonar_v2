json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user:
    end
  end
end
